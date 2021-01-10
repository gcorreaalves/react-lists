import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { List } from '@react-lists/core'

const useStyles = makeStyles(() => ({
  section: {
    marginTop: 50
  }
}))

const GetStartedSection: React.FunctionComponent = () => {
  const classes = useStyles()
  const ItemRenderer: React.FunctionComponent<{ item: string }> = ({
    item
  }) => <>{item}</>

  return (
    <section className={classes.section} id='get-started'>
      <Typography variant='h5' component='h2' gutterBottom>
        Get Started
      </Typography>

      <Typography paragraph>
        React List is a simple, easy to use React component to create different
        kind of lists. It supports:
      </Typography>

      <ul>
        <li>
          <Typography>virtual list</Typography>
        </li>
        <li>
          <Typography>infinite scroll</Typography>
        </li>
        <li>
          <Typography>index to browse the list easily</Typography>
        </li>
        <li>
          <Typography>grouping with sticky headers</Typography>
        </li>
        <li>
          <Typography>reverse list</Typography>
        </li>
      </ul>

      <Typography paragraph>
        To start, install react-lists in your React project.
      </Typography>

      <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
        {'npm install react-lists'}
      </SyntaxHighlighter>

      <Box mb={2} mt={2}>
        <Typography paragraph>If you are using yarn.</Typography>
        <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
          {'yarn add react-lists'}
        </SyntaxHighlighter>
      </Box>
      <Box mb={2} mt={2}>
        <Typography paragraph>Simple usage example.</Typography>
        <List
          listHeight={400}
          items={[
            'Afghanistan',
            'Albania',
            'Algeria',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antigua &amp; Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia &amp; Herzegovina',
            'Botswana',
            'Brazil',
            'British Virgin Islands',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Cape Verde',
            'Cayman Islands',
            'Chad',
            'Chile',
            'China',
            'Colombia',
            'Congo',
            'Cook Islands',
            'Costa Rica',
            'Cote D Ivoire',
            'Croatia',
            'Cruise Ship',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Estonia',
            'Ethiopia',
            'Falkland Islands',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Polynesia',
            'French West Indies',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea Bissau',
            'Guyana',
            'Haiti',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kuwait',
            'Kyrgyz Republic',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Mauritania',
            'Mauritius',
            'Mexico',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Namibia',
            'Nepal',
            'Netherlands',
            'Netherlands Antilles',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Norway',
            'Oman',
            'Pakistan',
            'Palestine',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Reunion',
            'Romania',
            'Russia',
            'Rwanda',
            'Saint Pierre &amp; Miquelon',
            'Samoa',
            'San Marino',
            'Satellite',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'South Africa',
            'South Korea',
            'Spain',
            'Sri Lanka',
            'St Kitts &amp; Nevis',
            'St Lucia',
            'St Vincent',
            'St. Lucia',
            'Sudan',
            'Suriname',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            "Timor L'Este",
            'Togo',
            'Tonga',
            'Trinidad &amp; Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks &amp; Caicos',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'Uruguay',
            'Uzbekistan',
            'Venezuela',
            'Vietnam',
            'Virgin Islands (US)',
            'Yemen',
            'Zambia',
            'Zimbabwe'
          ]}
          itemRenderer={ItemRenderer}
        />
      </Box>

      <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
        {`import React from 'react'
import { List } from '@react-lists/core'

export default function SampleList() {
  return (
    <List
      listHeight={400}
      items={["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]}
      itemRenderer={({ item }) => item}
    />
  )
}`}
      </SyntaxHighlighter>
    </section>
  )
}

export default GetStartedSection
