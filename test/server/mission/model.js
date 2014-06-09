/**
 * Created by Дамир Имангулов on 08.06.2014.
 */
'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    missions = require('../../../lib/models/mission'),
    Mission = mongoose.model('Mission');

var mission;

describe('Mission Model', function() {
    beforeEach(function(done) {
        mission = new Mission({
            name : "My first mission",
            type: "Mission Type 1",
            scopeId : new mongoose.Types.ObjectId,
            relations : [new mongoose.Types.ObjectId],
            questions : [{
                code : "quest1",
                description : "quest1 name",
                type : "quest1 type",
                answerCode : "answer 1",
                answers : [{
                    code : "answer 1",
                    value : "answer 1 value"
                }]
            }]
        });

        // Clear users before testing
        Mission.remove().exec();
        done();
    });

    it('should begin with no missions', function(done) {
        Mission.find({}, function(err, missions) {
            missions.should.have.length(0);
            done();
        });
    });

    it('all good', function(done) {
        mission.save(function(err) {
            console.log(err);
            done();
        });
    });
    it('should fail when saving a mission without name', function(done) {
        mission.name = null;
        mission.save(function(err) {
            should.exist(err);
            done();
        });
    });
    it('should success without questions', function(done) {
        while(mission.questions.length > 0){
            mission.questions.pop();
        }
        mission.save(function(err) {
            should.not.exist(err);
            done();
        });
    });

    it('should create question', function(done) {
        should.exist(mission.questions[0]);
        done();
    });

    it('should check for code not null', function(done) {
        mission.questions[0].code = null;
        mission.save(function(err) {
            should.exist(err);
            done();
        });
    });

    it('should check for description not null', function(done) {
        mission.questions[0].description = null;
        mission.save(function(err) {
            should.exist(err);
            done();
        });
    });

    it('should check for type not null', function(done) {
        mission.questions[0].type = null;
        mission.save(function(err) {
            should.exist(err);
            done();
        });
    });

    it('should create answer', function(done) {
        should.exist(mission.questions[0].answers[0]);
        done();
    });

    it('should check for type not null', function(done) {
        var answer = mission.questions[0].answers[0];
        answer.code = null;
        mission.save(function(err) {
            should.exist(err);
            done();
        });
    });
    it('should check for type not null', function(done) {
        var answer = mission.questions[0].answers[0];
        answer.value = null;
        mission.save(function(err) {
            should.exist(err);
            done();
        });
    });
});