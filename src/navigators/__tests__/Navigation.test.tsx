import 'react-native'
import React from 'react'
import Navigation from '../'
import { render } from 'react-native-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
jest.useFakeTimers()

describe('Navigation', () => {
  it('renders correctly', () => {
    const tree = render(
      <MockedProvider mocks={[]} addTypename={false}>
        {
          // @ts-ignore
          <Navigation />
        }
      </MockedProvider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
