import * as dotenv from "dotenv";
dotenv.config();
import { Client, TwitterStrategy, BlueskyStrategy } from "@humanwhocodes/crosspost";

// Note: Use an app password, not your login password!
const bluesky = new BlueskyStrategy({
	identifier: "cthomas.bsky.social",
	password: process.env.BSKY_APP_PASSWORD,
	host: "bsky.social", // "bsky.social" for most people
});

// Note: OAuth app is required
const twitter = new TwitterStrategy({
	accessTokenKey: process.env.TX_ACCESS_TOKEN,
	accessTokenSecret: process.env.TX_ACCESS_TOKEN_SECRET,
	apiConsumerKey: process.env.TX_API_CONSUMER_KEY,
	apiConsumerSecret: process.env.TX_CONSUMER_SECRET,
});

// create a client that will post to all three
const client = new Client({
	strategies: [bluesky, twitter],
});

// post to all two
await client.post("Success in crossposting to X and Bluesky!");