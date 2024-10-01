import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  /**
   * This function will return if the Redis server
   * is alive or not in JSON format with a status
   * code 200 in the response.
   * The response will be in the following
   * format: { "redis": true, "db": true } 
   */
  static getStatus(request, response) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    response.status(200).send(status);
  }

  /**
   * should return the number of users and files in DB:
   * { "users": 12, "files": 1231 }
   *  with a status code 200
   */
  static async getStats(request, response) {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    response.status(200).send(stats);
  }
}

export default AppController;
