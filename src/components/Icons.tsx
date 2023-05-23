import { type SVGProps } from 'react'

export function DoneIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 -960 960 960' width='48' {...props} fill='currentColor'><path d='M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z' /></svg>
  )
}

export function RestartIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 -960 960 960' width='48' fill='currentColor' {...props}><path d='M451-96q-133-11-224.5-109T135-438q0-79 35.5-149.5T270-705l67 67q-50 32-79 86t-29 114q0 97 63.5 167T451-191v95Zm60 0v-95q97-11 159-80.5T732-438q0-100-67.5-172T497-688h-23l64 65-51 51-168-168 168-169 51 51-75 75h24q142 0 241 101.5T827-438q0 135-91.5 233T511-96Z' /></svg>
  )
}
