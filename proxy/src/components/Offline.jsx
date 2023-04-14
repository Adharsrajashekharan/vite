import React from 'react';
import styled from 'styled-components';

const OfflinePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const OfflinePage = () => {
  return (
    <OfflinePageContainer>
      <Title>You are offline</Title>
      <Message>Please check your internet connection and try again</Message>
    </OfflinePageContainer>
  );
};

export default OfflinePage;
