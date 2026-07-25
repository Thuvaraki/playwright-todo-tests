import { test, expect } from '@playwright/test';

test('TodoMVC workflow', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  const input = page.getByTestId('text-input');

  // Add 4 todos
  const todos = [
    'Write Test Cases',
    'Report Bug',
    'Execute Regression Tests',
    'Verify Bug Fix'
  ];

  for (const todo of todos) {
    await input.fill(todo);
    await input.press('Enter');
  }

  // Assert all 4 are present
  await expect(page.getByTestId('todo-item-label')).toContainText(todos);

  // Complete first two
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Write Test Cases' })
    .getByTestId('todo-item-toggle')
    .check();

  await page
    .getByRole('listitem')
    .filter({ hasText: 'Report Bug' })
    .getByTestId('todo-item-toggle')
    .check();

  // ---------------- Active ----------------
  await page.getByRole('link', { name: 'Active' }).click();

  await expect(page.getByText('Execute Regression Tests')).toBeVisible();
  await expect(page.getByText('Verify Bug Fix')).toBeVisible();

  await expect(page.getByText('Write Test Cases')).toHaveCount(0);
  await expect(page.getByText('Report Bug')).toHaveCount(0);

  // ---------------- Completed ----------------
  await page.getByRole('link', { name: 'Completed' }).click();

  await expect(page.getByText('Write Test Cases')).toBeVisible();
  await expect(page.getByText('Report Bug')).toBeVisible();

  await expect(page.getByText('Execute Regression Tests')).toHaveCount(0);
  await expect(page.getByText('Verify Bug Fix')).toHaveCount(0);

  // ---------------- Clear Completed ----------------
  await page.getByRole('button', { name: 'Clear completed' }).click();

  // ---------------- All ----------------
  await page.getByRole('link', { name: 'All' }).click();

  await expect(page.getByText('Execute Regression Tests')).toBeVisible();
  await expect(page.getByText('Verify Bug Fix')).toBeVisible();

  await expect(page.getByText('Write Test Cases')).toHaveCount(0);
  await expect(page.getByText('Report Bug')).toHaveCount(0);

  // ---------------- Check one remaining todo ----------------
  const regressionTodo = page
    .getByRole('listitem')
    .filter({ hasText: 'Execute Regression Tests' })
    .getByTestId('todo-item-toggle');

  await regressionTodo.check();
  await expect(regressionTodo).toBeChecked();

  // ---------------- Uncheck ----------------
  await regressionTodo.uncheck();
  await expect(regressionTodo).not.toBeChecked();
});