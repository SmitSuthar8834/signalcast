# Signalcast Node SDK

Node client for the Signalcast public API.

```bash
npm install @signalcast/node
```

```ts
import Signalcast from '@signalcast/node';
const client = new Signalcast('your api key', 'https://your-instance.example.com');
```

- `post(posts: CreatePostDto)` schedules posts
- `getPosts(query: GetPostsDto)` lists posts
- `upload(file: Buffer, extension: string)` uploads a media file

The base URL defaults to `SIGNALCAST_API_URL` or `http://localhost:3000`. The same endpoints work with curl; see the repository README.
