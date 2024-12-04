export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;

    // 간단한 유효성 검사
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    // 데이터 저장 로직 (데이터베이스에 저장하거나, 파일 시스템 등에 기록)
    const newPost = {
      id: Date.now(), // 고유 ID (DB에서는 자동으로 생성될 수 있음)
      title,
      content,
    };

    // 예시: 데이터베이스 대신 메모리 스토리지에 저장한다고 가정
    console.log('New Post:', newPost);

    // 성공 응답
    return res.status(201).json({ message: 'Post created successfully.', post: newPost });
  } else {
    // 허용되지 않은 메서드 처리
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
