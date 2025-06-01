export function errorToMessage(error: unknown): string {
  if (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    'data' in error
  ) {
    const err = error as {
      status: number | string
      data?: any
    }

    if (typeof err.data === 'string') return err.data
    if (
      typeof err.data === 'object' &&
      err.data !== null &&
      'message' in err.data &&
      typeof err.data.message === 'string'
    ) {
      return err.data.message
    }

    return `Request failed with status ${err.status}`
  }

  if (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in error &&
    (error as any).isAxiosError === true &&
    'message' in error
  ) {
    const axiosError = error as {
      message: string
    }
    return axiosError.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Unknown error'
}

export function toQueryString(
  params: Record<string, string | null | undefined>
): string {
  const query = Object.entries(params)
    .filter(([_, value]) => value != null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
    )
    .join('&')
  return query ? `?${query}` : ''
}
