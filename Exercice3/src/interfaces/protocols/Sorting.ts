type SortingData<T extends Comparable> = T[];

interface Equatable {
    '=*='?<T>(lhs: T, rhs: T): boolean;
}

interface Comparable extends Equatable {
    '>*'?<T>(lhs: T, rhs: T): boolean;
}

interface Sorting {
    merge<T extends Comparable>(data: SortingData<T>): SortingData<T>;
    bubbleSort<T extends Comparable>(data: SortingData<T>): SortingData<T>;
}
