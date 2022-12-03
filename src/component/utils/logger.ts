export const logInfo = (...info: any[]) => {
  if (info[0] instanceof Error) {
    console.error(info)
  } else {
    console.log(...info)
  }
}
