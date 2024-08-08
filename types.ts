import { StaticImageData } from "next/image"
import { ReactElement } from "react"

export type ProfileDetails = {
  image: StaticImageData,
  name: string,
  position: string,
  email: string,
  contact: string
}

export type Contact = {
  name: string,
  icon: ReactElement,
  href: string
}

export type AboutContents = {
  brandTitle: string,
  brandSections: Array<{
    subtitle: string,
    content: string
  }>
}

export type DemoImg = {
  name: string,
  src: string | StaticImageData
}

export type FooterNotes = {
  title: string,
  icon: ReactElement,
  note: string
}