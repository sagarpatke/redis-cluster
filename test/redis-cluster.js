const redis = require('thunk-redis');

const client = redis.createClient(7000);

describe('Redis Cluster Test', function() {
  it('should create a new list', function(done) {
    client.lpush('a', 123)(done);
  });

  it('should retrieve all items in a list', function(done) {
    client.lrange('a', 0, -1)(function(err, res) {
      if(err) { done(err); return; }
      console.log('res:', res[0]);
      done();
    });
  });
});
