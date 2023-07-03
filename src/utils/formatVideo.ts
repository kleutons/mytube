import moment from "moment";

export function formatViewCount(viewCount: number): string {
    if (viewCount >= 1000000) {
        return `${(viewCount / 1000000).toFixed(0)} mi`;
    } else if (viewCount >= 1000) {
        return `${(viewCount / 1000).toFixed(0)} mil`;
    } else {
        return `${viewCount}`;
    }
}


export function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, 'days');

    if (diffDays <= 0) {
        return 'hoje';
    } else if (diffDays === 1) {
        return 'há 1 dia';
    } else if (diffDays <= 7) {
        return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
        const diffWeeks = Math.floor(diffDays / 7);
        if (diffWeeks === 1) {
        return 'há 1 semana';
        } else {
        return `há ${diffWeeks} semanas`;
        }
    } else if (diffDays <= 365) {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) {
        return 'há 1 mês';
        } else {
        return `há ${diffMonths} meses`;
        }
    } else {
        const diffYears = Math.floor(diffDays / 365);
        if (diffYears === 1) {
        return 'há 1 ano';
        } else {
        return `há ${diffYears} anos`;
        }
    }
}