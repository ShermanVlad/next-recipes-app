import Link from 'next/link';

interface ErrorDisplayProps {
  title?: string;
  message: string;
  actionText?: string;
  actionHref?: string;
}

export default function ErrorDisplay({
  title = 'Error',
  message,
  actionText = 'Back to Search',
  actionHref = '/',
}: ErrorDisplayProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{message}</p>
        <Link
          href={actionHref}
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {actionText}
        </Link>
      </div>
    </div>
  );
}
