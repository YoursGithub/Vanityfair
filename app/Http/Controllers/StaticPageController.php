<?php

namespace App\Http\Controllers;

use App\Models\StaticPage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class StaticPageController extends Controller
{
    public function createView(Request $request)
    {

        return view('admin.create-static-page');
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required ',
            'content' => 'required',
        ]);

        try {

            StaticPage::create([
                'title' => $request->title,
                'slug' => Str::slug($request->title),
                'content' => $request->content
            ]);

            // dd(StaticPage::all());

            return redirect()->route('all-pages')->with('success', ' Page Created');
        } catch (\Throwable $th) {

            return redirect()->back()->withErrors("Some error occured ");
        }
    }

    public function updateView(Request $request, StaticPage $id)
    {
        $page = $id;
        return view('admin.create-static-page', compact('page'));
    }

    public function update(Request $request, StaticPage $id)
    {
        $page = $id;

        $request->validate([
            'title' => 'required ',
            'content' => 'required',
        ]);

        $page->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content
        ]);

        return redirect()->route('all-pages')->with('success', 'Page Updated');
    }

    public function delete(StaticPage $id)
    {
        $id->delete();

        return redirect()->route('all-pages')->with('success', 'Page Deleted');
    }

    public function all_pages()
    {
        $pages = StaticPage::all() ;

        return view('admin.all_static_pages', compact('pages'));

    }
}
