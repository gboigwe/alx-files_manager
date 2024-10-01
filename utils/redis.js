import redis from 'redis';
import { promisify } from 'util';

/**
 * RedisClient class to handle redis connection
 * and operations with redis service using redis
 * client library and promisify function from util
 * library to promisify redis client functions to
 * use async/await syntax for redis operations in
 * the service layer of the application to handle
 * redis operations in a more readable and maintainable way.
 */

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    this.client.on('error', (error) => {
      console.log(`Redis client not connected to the server: ${error.message}`);
    });

    this.client.on('connect', () => {
      // console.log('Redis client connected to the server');
    });
  }

  /**
   * Checks if connection to Redis is Alive
   * @return {boolean} true if connection alive or false if not
   */
  isAlive() {
    return this.client.connected;
  }

  /**
   * will get the value of a key in redis
   * @key {string} this is key in getting redis value
   * @return {string} the value of key
   */
  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  /**
   * A new key-value pair will be saved in redis
   * @key {string} this is key in getting redis value
   * @value {string} value to be asigned to key
   * @duration {number} TTL of key
   * @return {undefined}  No return value
   */
  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

  /**
   * Deleting a key in redis
   * @key {string} key to be deleted
   * @return {undefined}  No return
   */
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
