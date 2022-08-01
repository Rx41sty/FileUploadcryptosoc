export class CustomError extends Error{
    private errorMap = new Map([
        [ErrorNM.FileNotUploaded, "Please Upload a file"],
        [ErrorNM.Unknown, "Unknown error"]
    ]);
    constructor(private readonly errorCode: number) {
        super();
    }

    public getMessage():string{
        return this.errorMap.get(this.errorCode)!;
    }

    public getErrorCode():number{
        return this.errorCode!;
    }
}

export enum ErrorNM{
    FileNotUploaded,
    Unknown
}