<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $totalUser = User::count();
        $totalProduct = Product::count();
        $totalCartNumber = Order::distinct('cart_number')->count('cart_number');
        $startOfMonth = Carbon::now()->startOfMonth();
        $endOfMonth = Carbon::now()->endOfMonth();
        $endDate = Carbon::now();
        $startDate = $endDate->copy()->subMonths(5)->startOfMonth();

// Initialize arrays to hold the data
        $months = [];
        $cartCounts = [];
        $userCounts = [];

// Loop through each month
        for ($i = 0; $i < 6; $i++) {
            $monthStart = $startDate->copy()->addMonths($i);
            $monthEnd = $monthStart->copy()->endOfMonth();

            // Get count of unique cart_number
            $cartCount = Order::whereBetween('created_at', [$monthStart, $monthEnd])
                ->distinct('cart_number')
                ->count('cart_number');

            // Get count of unique users (based on orders)
            $userCount = User::whereBetween('created_at', [$monthStart, $monthEnd])->count();

            // Format the month for display (e.g., "June 2024")
            $months[] = $monthStart->format('F Y');
            $cartCounts[] = $cartCount;
            $userCounts[] = $userCount;
        }
        $totalPrice = Order::whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->distinct('cart_number')
            ->select(DB::raw('SUM(total_price) as total_prices'))
            ->value('total_prices');

        return Inertia::render('Dashboard', [
            'totalUser' => $totalUser,
            'totalProduct' => $totalProduct,
            'totalCartNumber' => $totalCartNumber,
            'totalPrice' => $totalPrice,
            'monthsArray' => $months,
            'cartCountsArray' => $cartCounts,
            'userCountsArray' => $userCounts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}