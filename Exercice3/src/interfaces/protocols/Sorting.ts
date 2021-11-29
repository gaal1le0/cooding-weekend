type SortingData<T> = T[];

interface Sorting {
    merge<T>(data: SortingData<T>): SortingData<T>;
    bubbleSort<T>(data: SortingData<T>): SortingData<T>;
}
