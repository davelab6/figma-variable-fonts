import * as React from 'react';
import { Image, Page, View, Text } from 'react-figma';
export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                <Text style={{ color: '#000000' }}>text</Text>
                <Image
                  source="http://placekitten.com/400x400"
                  resizeMode="contain"
                  style={{
                    height: 400,
                    width: 400,
                  }}
                />
            </View>
        </Page>
    );
};