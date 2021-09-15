// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks'

interface ThumbnailProps {
    hasShadow: boolean;
    bgColor: types.IColor;
}

const Thumbnail: types.Brick<ThumbnailProps> = ({hasShadow, bgColor, ...rest}) => {
  return (
    <div {...rest} className={`my-6 p-6 text-center border rounded-lg ${
        hasShadow ? 'shadow-xl' : ''
    } ${bgColor?.className}`}>

      <Image
        propName="image"
        alt="Fallback alt tag"
        maxWidth={200}
        imageClassName="mb-6"   
      />

      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-2xl font-bold">{children}</h1>
        )}
        placeholder="Type a title..."
      />
      
      <RichText
        propName="description"
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
        ]}
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  getDefaultProps: () => ({
    title: 'Hello, world!',
    description: 'Lorem ipsum dolor sit amet.',
    hasShadow: true,
    bgColor: {color: '#FFFFFF', className:'bg-white'}
  }),
  sideEditProps: [
      {
          name: 'hasShadow',
          label: 'Shadow',
          type: types.SideEditPropType.Boolean
      },
      {
          name: 'bgColor',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
              display: types.OptionsDisplay.Color,
              options: [
                {label: 'White', value: {color: '#FFFFFF', className:'bg-white'}},
                {label: 'Light blue', value: {color: '#EFF6FF', className:'bg-blue-50'}}
              ]
          }
      }
  ],
}

export default Thumbnail