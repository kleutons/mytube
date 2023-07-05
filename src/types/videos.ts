export type TypeVideos = {
    id: string,
    snippet: {
      channelId: string,
      title: string,
      description:string,
      thumbnails: {
        medium:{
          url: string
        },
        high: {
          url: string
        },
        maxres: {
          url: string;
        }
      }
      channelTitle: string;
      publishedAt: string;
    },
    statistics: {
      viewCount: string;
      likeCount: number;
      commentCount: number;
    }
}

export type TypeChannel = {
  id: string,
    snippet: {
      title: string,
      thumbnails: { 
        default: { url: string }
      },
    };
}

export type TypeVideoWithChannel ={
  video: TypeVideos,
  channel: TypeChannel
}

export type TypeVideosRelated = {
  id: {
    videoId:string
      },
  snippet: {
    channelId: string,
    title: string,
    description:string,
    thumbnails: {
      medium:{
        url: string
      },
      high: {
        url: string
      },
      maxres: {
        url: string;
      }
    }
    channelTitle: string;
    publishedAt: string;
  },
  statistics: {
    viewCount: string;
    likeCount: number;
    commentCount: number;
  }
}

export type TypeVideoSearch ={
  video: TypeVideosRelated,
  channel: TypeChannel
}
