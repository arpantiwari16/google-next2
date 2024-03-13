import ImageSearch from '@/components/ImageSearch';
import React from 'react'

async function WebImagePage({searchParams}) {
  const startIndex = searchParams.start || '1';
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}
    &cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}
    &searchType=image&start=${startIndex}`

  );
  const data=await response.json();
  const result=data.items;
  // console.log(data);
  return (
    <div>
      {
        // console.log(data)
        result && <ImageSearch results={data}/>
        // <h1>hello</h1>
      }
    </div>

  )
}

export default WebImagePage