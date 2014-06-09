/**
 * Created by Дамир Имангулов on 26.05.2014.
 */
/**
 * Mission Schema
 */
//TODO indexes
'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MissionSchema = new Schema({
    name: {type:String, required : 'Укажите название миссии'},
    type: { type: String, lowercase: true, required : 'Не указан тип миссии' },
    scopeId : mongoose.Schema.Types.ObjectId,
    relations : [mongoose.Schema.Types.ObjectId],
    questions : [new mongoose.Schema({
        code : {type :String, required: 'Не указан код вопроса'},
        description : {type :String, required: 'Не указан текст вопроса'},
        type : {type :String, required: 'Не указан тип вопроса'},
        answerCode : String,
        answers : [new mongoose.Schema({
            code : {type :String, required: 'Не указан код ответа'},
            value : {type :String, required: 'Не указан текст ответа'}
        })]
    })]
});

/*MissionSchema
    .path('questions')
    .validate(function(questions) {
        return name == undefined || name == '';
    }, 'Необходимо указать название миссии');*/

module.exports = mongoose.model('Mission', MissionSchema);