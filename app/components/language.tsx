import { Typography } from "@mui/material";
import * as React from "react";

/**
 * This component is to hold one of the languages for the about page
 * @param language this prop will be the heading
 * @param children this prop will be the description
 * @constructor
 */
interface props {
  languages: Array<string>,
  header: string
}

/**
 * This component will store the programming languages and technologies that I have
 * learned throughout my life
 * @param param
 * @returns 
 */
export default function LanguageComponent({ languages, header }: props) {
  return (
    <div className='persona-card'>
      <Typography className="text-blue-950" variant='h6' sx={{ fontWeight: 800, mb: 2 }}>{header}</Typography>
      <div className='flex flex-wrap gap-1'>
        {languages.map((tech) =>
          <span className='persona-tag' key={tech}>{tech}</span>
        )}
      </div>
    </div>
  )
}