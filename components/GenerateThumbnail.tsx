import React, { useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const GenerateThumbnail = () => {
  const [isAIThumbnail, setIsAIThumbnail] = useState(false)

  return (
    <>
      <div className="generate_thumbnail">
        <Button 
          type="button" 
          variant="plain"
          onClick={() => setIsAIThumbnail(true)}
          className={cn('', {
            'bg-black-6': isAIThumbnail
          })}
          >
          Use AI to generate thumbnail
          </Button>

          <Button 
          type="button" 
          variant="plain"
          onClick={() => setIsAIThumbnail(false)}
          className={cn('', {
            'bg-black-6': !isAIThumbnail
          })}
          >
          Upload custom image
          </Button>
      </div>
    </>
  )
}

export default GenerateThumbnail