import { useRouter } from "next/router"

export default function Users() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>
        User Detail Page
        {' '}
        {id}
        {' '}
      </p>
    </div>
  )
}
