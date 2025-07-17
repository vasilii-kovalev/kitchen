/* eslint-disable no-console */
import {
	PrismaClient,
} from "./prisma/client";

const prismaClient = new PrismaClient();

const seed = async (): Promise<void> => {
	console.time("Database has been cleared.");

	// TODO: Add entities' clearing.
	await Promise.all([]);

	console.timeEnd("Database has been cleared.");

	console.log("Seeding...");

	console.time("Database has been seeded.");

	// TODO: Add seeding logic.

	console.timeEnd("Database has been seeded.");
};

try {
	void seed();
} catch (error) {
	console.error(error);

	process.exit(1);
} finally {
	void prismaClient.$disconnect();
}
