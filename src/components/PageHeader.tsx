import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  backHref?: string;
  backText?: string;
}

export default function PageHeader({
  title,
  showBackButton = true,
  backHref = '/',
  backText = '← Back to Search',
}: PageHeaderProps) {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {showBackButton ? (
            <Link
              href={backHref}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {backText}
            </Link>
          ) : (
            <div></div>
          )}
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <div className="w-20"></div>
        </div>
      </div>
    </div>
  );
}
