import { test, expect } from '@playwright/test';

test('os seis exercicios funcionam sem erros ou overflow', async ({ page }, testInfo) => {
  const erros = [];
  page.on('pageerror', (erro) => erros.push(erro.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2 })).toHaveCount(6);

  const dinamico = page.getByRole('button', { name: 'Clique Aqui', exact: true }).first();
  await expect(dinamico).toHaveCSS('background-color', 'rgb(59, 130, 246)');
  await dinamico.click();
  await expect(page.getByRole('button', { name: 'Ativado!' })).toHaveCSS('background-color', 'rgb(16, 185, 129)');
  await page.getByRole('button', { name: 'Ativado!' }).click();
  await expect(dinamico).toHaveAttribute('aria-pressed', 'false');

  await expect(page.getByText('Operação realizada com sucesso!')).toBeVisible();
  await expect(page.getByText('Falha ao processar a requisição.')).toBeVisible();
  await expect(page.getByText('R$ 45,00')).toBeVisible();

  await page.clock.install();
  const contador = page.getByRole('region', { name: '04 useEffect em ação' });
  await contador.getByRole('button').click();
  await expect(page).toHaveTitle('Cliques: 1');
  await page.clock.fastForward(1200);
  await contador.getByRole('button').click();
  await page.clock.fastForward(1000);
  await expect(contador.getByRole('status')).toHaveText('Contador atualizado com sucesso!');
  await expect(page).toHaveTitle('Cliques: 2');
  await page.clock.fastForward(1100);
  await expect(contador.getByRole('status')).toBeEmpty();

  const interruptor = page.getByRole('switch', { name: 'Alternar Luz' });
  await expect(interruptor).not.toBeChecked();
  await interruptor.click();
  await expect(interruptor).toBeChecked();
  await expect(page.getByText('A luz está: Ligada', { exact: true })).toBeVisible();
  await interruptor.press('Space');
  await expect(interruptor).not.toBeChecked();

  const imagem = page.getByRole('img', { name: 'Câmera fotográfica' });
  await expect(imagem).toBeVisible();
  expect(await imagem.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
  await page.getByRole('button', { name: 'Comprar' }).click();
  await expect(page.getByRole('alert')).toContainText('adicionado ao carrinho!');
  await page.clock.fastForward(4500);
  await expect(page.getByRole('alert')).toHaveCount(0);

  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('atividade.png'), fullPage: true });
  expect(erros).toEqual([]);
});
