import React from 'react'
import { Helmet } from 'react-helmet'

import PropTypes from 'prop-types'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ProduceX',
  description: 'We sell organic locally grown produces',
  keywords: 'veggies, buy veggies,vegetable, organic vegetable',
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}
export default Meta