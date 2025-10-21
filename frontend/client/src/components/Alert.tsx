
export type AlertProps={
    message:string
    style:string
}

export default function Alert({message,style}:AlertProps) {
  return (
    <div className={style}>{message}</div>
  )
}
