export declare const isFile: (f: string) => boolean;
export declare const readSync: (filePath: string) => string;
export declare const fullCurrentPath: () => string;
export declare const resolveDirDest: (fileDest: string) => void;
export declare const writeAsync: (path: string, content: string) => Promise<{}>;
export declare const defineExtension: (filePath: string) => string;
