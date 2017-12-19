export interface INotification {
    id: string;
    data?: any;
    topic: string;
    notification?: {
        body?: string;
        title?: string;
    };
}

export interface ISubscribeRequest {
    topic: string;
    client: string[];
}