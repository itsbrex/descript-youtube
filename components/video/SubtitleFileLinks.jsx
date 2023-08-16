import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, Grid, Button } from '@material-ui/core'

function SubtitleFileLinks({ captionTracks }) {
  const handleCopy = async (event, url, withTimestamp) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}&fmt=vtt`);
      let text = await response.text();

      // Remove first three lines
      const lines = text.split('\n').slice(3);
      text = lines.join('\n');

      if (!withTimestamp) {
        // Remove timestamps
        const patternTimestamps = /(\d{2}:\d{2}:\d{2}\.\d{3} ? --> ?\d{2}:\d{2}:\d{2}\.\d{3} ?(align:start )?(position:0% )?|\d{2}:\d{2}:\d{2}\.\d{3})/g;
        text = text.replace(patternTimestamps, '');
      }

      // Remove remaining tags and "position:0%"
      const patternTags = /(<c>)|(<\/c>)|(<>)|(position:0%)/g;
      const cleanedText = text.replace(patternTags, '');

      // Remove duplicate consecutive lines
      const lines2 = cleanedText.split('\n');
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
          const { baseUrl, languageCode, name: { simpleText: label } } = elem;
          return (
            <Grid key={`subtitles-${label}-${index}`} item md={12} xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar color='primary'>{languageCode}</Avatar>
                </ListItemAvatar>
                <Button
                  variant="contained" 
                  color="primary"
                  onClick={(event) => handleCopy(event, baseUrl, true)}
                >
                  {`Copy ${label} with timestamps`}
                </Button>
                <Button
                  variant="contained" 
                  color="primary"
                  onClick={(event) => handleCopy(event, baseUrl, false)}
                >
                  {`Copy ${label} without timestamps`}
                </Button>
              </ListItem>
            </Grid>
          )
        })}
      </Grid>
    </List>
  )
}

export default SubtitleFileLinks
