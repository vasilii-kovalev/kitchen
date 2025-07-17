import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import Fastify from "fastify";

// Creation of server.
/**
 * {@link https://fastify.dev/docs/latest/Reference/Server Documentation}
 */
// eslint-disable-next-line new-cap
const server = Fastify({
	logger: {
		level: "error",
	},
});

/**
 * {@link https://github.com/fastify/fastify-swagger?tab=readme-ov-file#usage Documentation}
 */
void server.register(
	swagger,
	{
		openapi: {
			/*
				Can't use version 3.1.0 because of the following issues:
				* `oneOf` doesn't render the schema names when `buildLocalReference` is defined
				* Array of schema doesn't render the schema name (https://github.com/swagger-api/swagger-ui/issues/9593)
			*/
			openapi: "3.0.0",
		},
		refResolver: {
			// eslint-disable-next-line @typescript-eslint/max-params
			buildLocalReference: (
				json,
				baseUri,
				fragment,
				index,
			) => {
				return (
					json.$id
					?? `Unknown schema ${index}`
				) as string;
			},
		},
	},
);

/**
 * {@link https://github.com/fastify/fastify-swagger-ui?tab=readme-ov-file#usage Documentation}
 */
void server.register(
	swaggerUi,
	{
		routePrefix: "/swagger",
	},
);

// Schemas.
// TODO: Register schemas.

// Routes.
// TODO: Add routes.

const PORT = 5_000;

// Starting the server.
void server.listen({
	port: PORT,
})
	.then(() => {
		console.info(`Dev server: http://localhost:${PORT}`);
	});
