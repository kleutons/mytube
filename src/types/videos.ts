export type TypeVideos = {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string;
        }
      }
      channelTitle: string;
      publishedAt: string;
    },
    statistics: {
      viewCount: string;
    }
}