import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="" />

const MyComponent = () => (
  <Card>
    <Card.Content>
    </Card.Content>
    <Card.Cover source={{ url: '' }} />
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
  </Card>
);

export default MyComponent;