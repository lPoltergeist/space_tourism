import React, { useEffect, useState } from 'react'
import { Subheading1 } from '../../styles/Headings'
import { PageTitleSection } from './style'
import { PageTitleData } from '../../Data/PageTitleData'
import { url } from 'inspector'

const PageTitle = ({id, title} :any) => {

  return (
    <>
    <PageTitleSection>

       <div>
       <Subheading1><span>{id}</span>{title}</Subheading1>
         
      </div>
    </PageTitleSection>
    </>
  )
}

export default PageTitle