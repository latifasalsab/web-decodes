import { Input } from "@/components/ui/input";
import Image from 'next/image';

export default function SearchBar({ search, onSearchChange }: Readonly<{ search: string; onSearchChange: (value: string) => void }>) {
  return (
    <div className="pt-6 sm:pt-6">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-0">
        <div className="flex justify-end mb-8">
          <div className="relative w-64">
            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-gray-800 text-white px-3 py-4 rounded-full border-gray-800 pl-10 pr-10 focus:bg-gray-700 text-sm"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              <Image
                src="/icons/icon_search.png"
                alt="icon search"
                width={18}
                height={18}
                className="opacity-70"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}