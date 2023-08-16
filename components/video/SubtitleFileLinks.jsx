import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, Grid } from '@material-ui/core'

function SubtitleFileLinks({ captionTracks }) {
  const handleClick = async (event, url) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}&fmt=vtt`);
      let text = await response.text();

      // Remove first three lines
      const lines = text.split('\n').slice(3);
      text = lines.join('\n');

      // Remove timestamps
      const patternTimestamps = /(\d{2}:\d{2}:\d{2}\.\d{3} ?--> ?\d{2}:\d{2}:\d{2}\.\d{3} ?(align:start )?(position:0% )?|\d{2}:\d{2}:\d{2}\.\d{3})/g;
      const cleanedText1 = text.replace(patternTimestamps, '');

      // Remove remaining tags and "position:0%"
      const patternTags = /(<c>)|(<\/c>)|(<>)|(position:0%)/g;
      const cleanedText2 = cleanedText1.replace(patternTags, '');

      // Remove duplicate consecutive lines
      const lines2 = cleanedText2.split('\n');
      let prevLine = '';
      let finalText = '';

      for (const line of lines2) {
        if (line.trim() !== '' && line !== prevLine) {
          finalText += line + '\n';
          prevLine = line;
        }
      }

      // Copy text to clipboard
      navigator.clipboard.writeText(finalText);
    } catch (error) {
      console.error(`Error fetching data from URL: ${error}`);
    }
  };

  return (
    <List>
      <Grid container>
        {captionTracks.map((elem, index) => {
          const {
            baseUrl,
            languageCode,
            name: { simpleText: label }
          } = elem
          return (
            <Grid key={`subtitles-${label}-${index}`} item md={4} xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar color='primary'>{languageCode}</Avatar>
                </ListItemAvatar>
                <a
                  href={`${baseUrl}&fmt=vtt`}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(event) => handleClick(event, baseUrl)}
                  style={{ color: '#0062ff' }}
                >
                  {label}
                </a>
              </ListItem>
            </Grid>
          )
        })}
      </Grid>
    </List>
  )
}

export default SubtitleFileLinks
