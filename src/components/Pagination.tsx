interface Props {
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination = ({
    page,
    hasNext,
    hasPrev,
    onNext,
    onPrev,
}: Props) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-10">

            {/* Prev */}
            <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="px-4 py-2 text-sm rounded-lg border bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
                ← Prev
            </button>

            {/* Page indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium text-gray-900">
                    Page {page}
                </span>
            </div>

            {/* Next */}
            <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-4 py-2 text-sm rounded-lg border bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;