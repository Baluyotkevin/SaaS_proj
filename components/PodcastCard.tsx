import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const PodcastCard = ({ podcastId, title, description, imgURL} : {
    imgURL: string,
    title: string,
    description: string,
    podcastId: number
}) => {

  const router = useRouter()
  const handleViews = () => {
    // increases views
    router.push(`/podcasts/${podcastId}`, {
      scroll: true
    })
  }

  return (
    <div className='cursor-pointer' onClick={handleViews} >
      <figure className="flex flex-col gap-2">
        <Image 
          src={imgURL}
          width={174}
          height={174}
          alt={title}
          className='aspect-square w-full rounded-xl 2xl:size-[200px] h-fit'
        />
        <div className='flex flex-col'>
          <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
          <h2 className='text-12 truncate font-normal capitalize text-white-4'>{description}</h2>
        </div>
      </figure>
    </div>
  )
}

export default PodcastCard