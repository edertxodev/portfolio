import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ExternalLink from '@/components/ui/external-link'
import Image, { StaticImageData } from 'next/image'

type ProjectCardProps = {
  title: string
  imageSrc: StaticImageData
  url: string
}

export default function ProjectCard({ title, imageSrc, url }: ProjectCardProps) {
  return (
    <ExternalLink href={url}>
      <Card className="dark:bg-transparent default-transition hover:bg-green-50 hover:dark:bg-white/5">
        <CardHeader className="xl:py-12">
          <CardTitle className="text-center text-4xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} />
        </CardContent>
      </Card>
    </ExternalLink>
  )
}
