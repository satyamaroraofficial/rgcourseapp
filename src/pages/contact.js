import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import DualInfoblock from "../components/Reuseable/DualInfoblock";
import Coursecart from "../components/Cart/Coursecart";


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="LearnCodeOnline.in"
      heroClass="hero-background" />
      <Infoblock heading="About Us"/>
      <Coursecart courses={data.courses}/>
      <DualInfoblock heading="Our Team"/>
  </Layout>
)


export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
