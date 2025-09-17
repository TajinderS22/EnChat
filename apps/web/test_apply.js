async function testSignup() {
  try {
    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: 'Test',
        lastname: 'User',
        username: 'testuser',
        email: 'test@example.com',
        password: 'TestPass123!',
      }),
    });

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testSignup();
