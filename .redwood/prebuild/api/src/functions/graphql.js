import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_videos_sdl from "../graphql/videos.sdl";
sdls.videos_sdl = sdls_videos_sdl;
let services = {};
import * as services_videos_videos from "../services/videos/videos";
services.videos_videos = services_videos_videos;
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2dyYXBocWwuanMiXSwibmFtZXMiOlsiY3JlYXRlR3JhcGhRTEhhbmRsZXIiLCJkYiIsImxvZ2dlciIsImhhbmRsZXIiLCJsb2dnZXJDb25maWciLCJvcHRpb25zIiwiZGlyZWN0aXZlcyIsInNkbHMiLCJzZXJ2aWNlcyIsIm9uRXhjZXB0aW9uIiwiJGRpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLG9CQUFULFFBQXFDLDJCQUFyQzs7Ozs7Ozs7Ozs7O0FBTUEsU0FBU0MsRUFBVDtBQUNBLFNBQVNDLE1BQVQ7QUFFQSxPQUFPLE1BQU1DLE9BQU8sR0FBR0gsb0JBQW9CLENBQUM7QUFDMUNJLEVBQUFBLFlBQVksRUFBRTtBQUFFRixJQUFBQSxNQUFGO0FBQVVHLElBQUFBLE9BQU8sRUFBRTtBQUFuQixHQUQ0QjtBQUUxQ0MsRUFBQUEsVUFGMEM7QUFHMUNDLEVBQUFBLElBSDBDO0FBSTFDQyxFQUFBQSxRQUowQztBQUsxQ0MsRUFBQUEsV0FBVyxFQUFFLE1BQU07QUFDakI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFIO0FBQ0Q7QUFSeUMsQ0FBRCxDQUFwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdyYXBoUUxIYW5kbGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcblxuaW1wb3J0IGRpcmVjdGl2ZXMgZnJvbSAnc3JjL2RpcmVjdGl2ZXMvKiovKi57anMsdHN9J1xuaW1wb3J0IHNkbHMgZnJvbSAnc3JjL2dyYXBocWwvKiovKi5zZGwue2pzLHRzfSdcbmltcG9ydCBzZXJ2aWNlcyBmcm9tICdzcmMvc2VydmljZXMvKiovKi57anMsdHN9J1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvbGliL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGxvZ2dlckNvbmZpZzogeyBsb2dnZXIsIG9wdGlvbnM6IHt9IH0sXG4gIGRpcmVjdGl2ZXMsXG4gIHNkbHMsXG4gIHNlcnZpY2VzLFxuICBvbkV4Y2VwdGlvbjogKCkgPT4ge1xuICAgIC8vIERpc2Nvbm5lY3QgZnJvbSB5b3VyIGRhdGFiYXNlIHdpdGggYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICBkYi4kZGlzY29ubmVjdCgpXG4gIH0sXG59KVxuIl19