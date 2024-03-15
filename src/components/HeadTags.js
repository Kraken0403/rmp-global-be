import React from 'react'
import Helmet from "react-helmet";
function HeadTags(props) {

    const {
        title = "Portfolio - your name",
        metaDescription = "defaul tdescription",
      } = props;

  return (
    <div>
    <Helmet>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" key="description" content={metaDescription} />
    <meta name="title" key="title" content={title} />
    <meta property="og:title" key="og:title" content={title} />
  </Helmet>
    </div>
  )
}

export default HeadTags