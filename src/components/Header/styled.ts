import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  gap: 14rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled.div`
  gap: 0.75rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};

    font-size: 0.875rem;
    line-height: 1.3;
  }

  nav {
    padding: 0.5rem;
    border-radius: 6px;

    background: ${props => props.theme['yellow-light']};

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme['yellow-dark']};
    }
  }
`
