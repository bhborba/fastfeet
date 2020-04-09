import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default styled(LinearGradient).attrs({
    colors: ['#7D40E7', '#FFFFFF'],
    locations: [0, 0.5],
})`
    flex: 1;
`;
