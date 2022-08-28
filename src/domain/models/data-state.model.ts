export class DataState<T> {
  data?: T
  error?: string
}

export class DataSuccess<T> implements DataState<T> {
  data: T

  constructor(data: T) {
    this.data = data
  }
}

export class DataFailed<T> implements DataState<T> {
  error: string

  constructor(error: string) {
    this.error = error
  }
}
