'use strict';

var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),
    Mission = mongoose.model('Mission'),
    request = require('supertest');

describe('GET /api/missions', function() {
  
  it('should respond with JSON array', function(done) {
      var m = new Mission({
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
      m.save(function(err){
              should.not.exist(err);
                request(app)
                    .get('/api/missions?scopeId='+m.scopeId)
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end(function(err, res) {
                        if (err) return done(err);
                        res.body.should.be.instanceof(Array);
                        done();
                    });
    });
  });
});